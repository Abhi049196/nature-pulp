import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const data = {
            name: formData.get("name") as string,
            address: formData.get("address") as string,
            phone: formData.get("phone") as string,
            email: formData.get("email") as string,
            department: formData.get("department") as string,
            remarks: formData.get("remarks") as string,
        };

        const cvFile = formData.get("cv") as File | null;

        // Validate required fields
        if (!data.name || !data.email || !data.phone || !data.department) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        let cvUrl: string | undefined;

        // TODO: Upload CV to Supabase Storage
        // if (cvFile) {
        //   const fileBuffer = await cvFile.arrayBuffer();
        //   const fileName = `cv/${Date.now()}_${cvFile.name}`;
        //   const { data: uploadData, error: uploadError } = await supabase.storage
        //     .from("career-uploads")
        //     .upload(fileName, fileBuffer, {
        //       contentType: cvFile.type,
        //     });
        //   if (uploadError) throw uploadError;
        //   cvUrl = supabase.storage.from("career-uploads").getPublicUrl(fileName).data.publicUrl;
        // }

        // TODO: Store in Supabase
        // const { error: dbError } = await supabase
        //   .from("career_applications")
        //   .insert([{ ...data, cv_url: cvUrl }]);
        // if (dbError) throw dbError;

        // TODO: Send email notification via Resend
        // await sendCareerNotification({ ...data, cv_url: cvUrl });

        console.log("Career application:", { ...data, cv_url: cvUrl, cvFile: cvFile?.name });

        return NextResponse.json(
            { success: true, message: "Application submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Career form error:", error);
        return NextResponse.json(
            { error: "Failed to process application" },
            { status: 500 }
        );
    }
}
