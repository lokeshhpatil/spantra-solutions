"use server"
export async function submitContactForm(formData: FormData) {
    const formID= process.env.FORMSPREE_ID;
    const data = Object.fromEntries(formData.entries());
    
    const response = await fetch(`https://formspree.io/f/${formID}`, {
        method:"POST",
        headers:{
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
}