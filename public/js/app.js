const changeBackgroundImage = () => {
    const table = document.querySelectorAll('.bucketlist-table')
    const imageUrls = [
        'https://images.unsplash.com/photo-1682685797365-6f57bbebffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8YWR2ZW50dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
        'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
        'https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80'
    ]

    const usedImageUrls = []

   
    
    table.forEach((table) => {
        const availableImageUrls = imageUrls.filter(url => !usedImageUrls.includes(url))

        if (availableImageUrls.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableImageUrls.length)
            const randomImageUrl = availableImageUrls[randomIndex]
            usedImageUrls.push(randomImageUrl)
            
            table.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 0, 0, 0)), url('${randomImageUrl}')`;

        }
       
    })
}

// Get all clickable container elements
const theContainers = document.querySelectorAll('.bucketlist-table');

theContainers.forEach(container => {
    container.addEventListener('click', () => {
        // Get the ID from the data-id attribute
        const id = container.getAttribute('data-id');

        // Construct the URL with the ID and redirect
        window.location.href = `/bucketlist/list/${id}`;
    });
});


changeBackgroundImage()