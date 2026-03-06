"use client";

import { useState, FormEvent, ChangeEvent, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, AlertCircle, X, Home } from "lucide-react";
import Link from "next/link";

interface FormField {
    name: string;
    label: string;
    type: "text" | "email" | "tel" | "textarea" | "select" | "file";
    placeholder?: string;
    required?: boolean;
    options?: { value: string; label: string }[];
    accept?: string;
}

interface FormComponentProps {
    fields: FormField[];
    endpoint: string;
    submitLabel?: string;
    successMessage?: string;
}

// ─── Validation Helpers ───
function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [".pdf", ".doc", ".docx"];

export default function FormComponent({
    fields,
    endpoint,
    submitLabel = "Submit",
}: FormComponentProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
            // Clear field error when user types
            setFieldErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        },
        []
    );

    const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            const ext = selectedFile.name.substring(selectedFile.name.lastIndexOf(".")).toLowerCase();

            if (!ALLOWED_FILE_TYPES.includes(ext)) {
                setFieldErrors((prev) => ({ ...prev, cv: "Only PDF, DOC, and DOCX files are allowed." }));
                return;
            }
            if (selectedFile.size > MAX_FILE_SIZE) {
                setFieldErrors((prev) => ({ ...prev, cv: "File size must be under 5MB." }));
                return;
            }

            setFile(selectedFile);
            setFieldErrors((prev) => {
                const next = { ...prev };
                delete next.cv;
                return next;
            });
        }
    }, []);

    // ─── Client-side validation ───
    const validateForm = (): boolean => {
        const errors: Record<string, string> = {};

        for (const field of fields) {
            const value = formData[field.name] || "";

            if (field.required && !value && field.type !== "file") {
                errors[field.name] = `${field.label} is required.`;
                continue;
            }

            if (field.type === "email" && value && !validateEmail(value)) {
                errors[field.name] = "Please enter a valid email address.";
            }

            if (field.type === "tel" && value && !validatePhone(value)) {
                errors[field.name] = "Please enter a valid phone number.";
            }

            if (field.type === "text" && field.required && value.length < 2) {
                errors[field.name] = `${field.label} must be at least 2 characters.`;
            }

            if (field.type === "textarea" && field.required && value.length < 10) {
                errors[field.name] = `${field.label} must be at least 10 characters.`;
            }

            if (field.type === "select" && field.required && !value) {
                errors[field.name] = `Please select a ${field.label.toLowerCase()}.`;
            }

            if (field.type === "file" && field.required && !file) {
                errors[field.name] = "Please upload the required file.";
            }
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        if (!validateForm()) return;

        setStatus("loading");

        try {
            const body = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                body.append(key, value);
            });
            if (file) {
                body.append("cv", file);
            }

            const res = await fetch(endpoint, {
                method: "POST",
                body,
            });

            const result = await res.json();

            if (!res.ok) {
                // Handle server-side validation errors
                if (result.errors) {
                    setFieldErrors(result.errors);
                    setStatus("error");
                    setErrorMessage("Please fix the errors below.");
                    return;
                }
                throw new Error(result.error || "Submission failed");
            }

            setStatus("success");
            setShowSuccessPopup(true);
            setFormData({});
            setFile(null);
        } catch (err) {
            setStatus("error");
            setErrorMessage(
                err instanceof Error ? err.message : "Something went wrong. Please try again later."
            );
        }
    };

    const closePopup = () => {
        setShowSuccessPopup(false);
        setStatus("idle");
    };

    return (
        <>
            {/* ═══════════════════════════════════════════════ */}
            {/*  SUCCESS POPUP MODAL                          */}
            {/* ═══════════════════════════════════════════════ */}
            <AnimatePresence>
                {showSuccessPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                        onClick={closePopup}
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative bg-white rounded-3xl p-8 sm:p-12 max-w-md w-full shadow-2xl text-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={closePopup}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Animated Checkmark */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 20,
                                    delay: 0.15,
                                }}
                                className="mx-auto mb-6 w-20 h-20 rounded-full bg-brand-dark-green/10 flex items-center justify-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.35, type: "spring", stiffness: 300 }}
                                >
                                    <CheckCircle className="w-12 h-12 text-brand-dark-green" />
                                </motion.div>
                            </motion.div>

                            {/* Celebration emoji */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl mb-2"
                            >
                                🎉
                            </motion.p>

                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="font-heading text-2xl font-bold text-brand-dark-green mb-3"
                            >
                                Submission Successful!
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-brand-dark-neutral/60 text-sm leading-relaxed mb-2"
                            >
                                Thank you for contacting <strong className="text-brand-dark-green">Jee Origin</strong>.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55 }}
                                className="text-brand-dark-neutral/60 text-sm leading-relaxed mb-2"
                            >
                                Your message has been received successfully. A confirmation email has been sent to your inbox.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-brand-dark-neutral/50 text-xs mb-8"
                            >
                                Our team will contact you shortly.
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65 }}
                                className="flex flex-col sm:flex-row gap-3 justify-center"
                            >
                                <button
                                    onClick={closePopup}
                                    className="px-8 py-3 border-2 border-brand-dark-green text-brand-dark-green rounded-full font-semibold text-sm hover:bg-brand-dark-green hover:text-white transition-all duration-300"
                                >
                                    Close
                                </button>
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-dark-green text-white rounded-full font-semibold text-sm hover:bg-brand-dark-green/90 transition-all duration-300"
                                >
                                    <Home className="w-4 h-4" />
                                    Return to Homepage
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ═══════════════════════════════════════════════ */}
            {/*  FORM                                         */}
            {/* ═══════════════════════════════════════════════ */}
            <div className="relative">
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {fields.map((field) => (
                            <div
                                key={field.name}
                                className={
                                    field.type === "textarea" || field.type === "file"
                                        ? "md:col-span-2"
                                        : ""
                                }
                            >
                                <label
                                    htmlFor={field.name}
                                    className="block text-sm font-medium text-brand-dark-neutral mb-2"
                                >
                                    {field.label}
                                    {field.required && (
                                        <span className="text-brand-accent-brown ml-1">*</span>
                                    )}
                                </label>

                                {field.type === "textarea" ? (
                                    <textarea
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-2xl border ${fieldErrors[field.name]
                                                ? "border-red-400 focus:border-red-500 focus:ring-red-200/50"
                                                : "border-brand-soft-green/30 focus:border-brand-dark-green focus:ring-brand-dark-green/10"
                                            } bg-white focus:ring-2 transition-all duration-300 text-sm text-brand-dark-neutral placeholder:text-brand-dark-neutral/30 outline-none resize-none`}
                                    />
                                ) : field.type === "select" ? (
                                    <select
                                        id={field.name}
                                        name={field.name}
                                        required={field.required}
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-2xl border ${fieldErrors[field.name]
                                                ? "border-red-400 focus:border-red-500 focus:ring-red-200/50"
                                                : "border-brand-soft-green/30 focus:border-brand-dark-green focus:ring-brand-dark-green/10"
                                            } bg-white focus:ring-2 transition-all duration-300 text-sm text-brand-dark-neutral outline-none appearance-none`}
                                    >
                                        <option value="">Select {field.label}</option>
                                        {field.options?.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                ) : field.type === "file" ? (
                                    <div className="relative">
                                        <input
                                            id={field.name}
                                            name={field.name}
                                            type="file"
                                            accept={field.accept || ".pdf,.doc,.docx"}
                                            onChange={handleFileChange}
                                            className={`w-full px-4 py-3 rounded-2xl border-2 border-dashed ${fieldErrors[field.name]
                                                    ? "border-red-400"
                                                    : "border-brand-soft-green/30 hover:border-brand-dark-green/30"
                                                } bg-white focus:border-brand-dark-green focus:ring-2 focus:ring-brand-dark-green/10 transition-all duration-300 text-sm text-brand-dark-neutral outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-dark-green/10 file:text-brand-dark-green hover:file:bg-brand-dark-green/20`}
                                        />
                                        {file && (
                                            <p className="mt-2 text-xs text-brand-dark-green">
                                                ✅ Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)}MB)
                                            </p>
                                        )}
                                        <p className="mt-1 text-xs text-brand-dark-neutral/40">
                                            Max 5MB — PDF, DOC, or DOCX only
                                        </p>
                                    </div>
                                ) : (
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        value={formData[field.name] || ""}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-2xl border ${fieldErrors[field.name]
                                                ? "border-red-400 focus:border-red-500 focus:ring-red-200/50"
                                                : "border-brand-soft-green/30 focus:border-brand-dark-green focus:ring-brand-dark-green/10"
                                            } bg-white focus:ring-2 transition-all duration-300 text-sm text-brand-dark-neutral placeholder:text-brand-dark-neutral/30 outline-none`}
                                    />
                                )}

                                {/* Field Error Message */}
                                <AnimatePresence>
                                    {fieldErrors[field.name] && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -4, height: 0 }}
                                            animate={{ opacity: 1, y: 0, height: "auto" }}
                                            exit={{ opacity: 0, y: -4, height: 0 }}
                                            className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                            {fieldErrors[field.name]}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* General Error Message */}
                    <AnimatePresence>
                        {status === "error" && errorMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200"
                            >
                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                                <p className="text-sm text-red-600">{errorMessage}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full sm:w-auto px-10 py-4 bg-brand-dark-green text-white rounded-full font-semibold text-base hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-green/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            submitLabel
                        )}
                    </button>
                </motion.form>
            </div>
        </>
    );
}
