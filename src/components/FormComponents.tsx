"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

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

export default function FormComponent({
    fields,
    endpoint,
    submitLabel = "Submit",
    successMessage = "Your submission was successful! We'll get back to you soon.",
}: FormComponentProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

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

            if (!res.ok) throw new Error("Submission failed");

            setStatus("success");
            setFormData({});
            setFile(null);
        } catch {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        >
                            <CheckCircle className="w-20 h-20 text-brand-dark-green mx-auto mb-6" />
                        </motion.div>
                        <h3 className="font-heading text-2xl font-bold text-brand-dark-green mb-3">
                            Thank You!
                        </h3>
                        <p className="text-brand-dark-neutral/60 max-w-md mx-auto">
                            {successMessage}
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-8 px-6 py-2.5 bg-brand-dark-green text-white rounded-full text-sm font-semibold hover:bg-brand-dark-green/90 transition-colors"
                        >
                            Submit Another
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
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
                                            className="w-full px-4 py-3 rounded-2xl border border-brand-soft-green/30 bg-white focus:border-brand-dark-green focus:ring-2 focus:ring-brand-dark-green/10 transition-all duration-300 text-sm text-brand-dark-neutral placeholder:text-brand-dark-neutral/30 outline-none resize-none"
                                        />
                                    ) : field.type === "select" ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            required={field.required}
                                            value={formData[field.name] || ""}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-2xl border border-brand-soft-green/30 bg-white focus:border-brand-dark-green focus:ring-2 focus:ring-brand-dark-green/10 transition-all duration-300 text-sm text-brand-dark-neutral outline-none appearance-none"
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
                                                className="w-full px-4 py-3 rounded-2xl border-2 border-dashed border-brand-soft-green/30 bg-white hover:border-brand-dark-green/30 focus:border-brand-dark-green focus:ring-2 focus:ring-brand-dark-green/10 transition-all duration-300 text-sm text-brand-dark-neutral outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-dark-green/10 file:text-brand-dark-green hover:file:bg-brand-dark-green/20"
                                            />
                                            {file && (
                                                <p className="mt-2 text-xs text-brand-dark-green">
                                                    Selected: {file.name}
                                                </p>
                                            )}
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
                                            className="w-full px-4 py-3 rounded-2xl border border-brand-soft-green/30 bg-white focus:border-brand-dark-green focus:ring-2 focus:ring-brand-dark-green/10 transition-all duration-300 text-sm text-brand-dark-neutral placeholder:text-brand-dark-neutral/30 outline-none"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Error Message */}
                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200"
                            >
                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                                <p className="text-sm text-red-600">{errorMessage}</p>
                            </motion.div>
                        )}

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
                )}
            </AnimatePresence>
        </div>
    );
}
