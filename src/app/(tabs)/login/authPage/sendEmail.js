
export async function SendUrl(formData) {
    const queryParams = new URLSearchParams({
        email: formData.email,
        password_hash: formData.password, // Security note: Be cautious with sensitive data
    }).toString();

    // Adjusted to send to the correct API endpoint
    const url = `/api/send-email?${queryParams}`;

    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
}
