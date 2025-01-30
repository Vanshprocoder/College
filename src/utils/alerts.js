
export const showSuccessAlert = () => {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'fixed top-4 right-4 bg-green-500 text-black px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-500 flex items-center';
    
    alertDiv.innerHTML = `
      <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      File Uploaded Successfully!
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
      alertDiv.style.opacity = '0';
      setTimeout(() => document.body.removeChild(alertDiv), 500);
    }, 3000);
  };