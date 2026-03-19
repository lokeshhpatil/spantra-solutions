"use server"
export async function submitContactForm(formData: FormData) {
    const formID = process.env.FORMSPREE_ID;
    
    if (!formID) {
        console.error("FORMSPREE_ID is not defined in environment variables");
        return { success: false, message: "Server configuration error" };
    }

    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch(`https://formspree.io/f/${formID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return { success: true };
        } else {
            return { success: false };
        }
    } catch (error) {
        console.error("Form submission error:", error);
        return { success: false };
    }
}