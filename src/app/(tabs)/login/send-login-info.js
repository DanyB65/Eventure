
export async function SendUrl(formData) {
    const queryParams = new URLSearchParams({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password_hash: formData.password, // Security note: Be cautious with sensitive data
    }).toString();

    // Adjusted to send to the correct API endpoint
    const url = `/api/create-user?${queryParams}`;

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
