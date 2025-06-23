export const popUps = {
  success: (msg) => `
    <li class="notification-item success">
      <div class="notification-content">
      
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
     </li>
  `,
  info: (msg) => `
    <li class="notification-item info">
      <div class="notification-content">
        
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
     </li>
  `,
  warning: (msg) => `
    <li class="notification-item warning">
      <div class="notification-content">
       
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
     </li>
  `,
  error: (msg) => `
    <li class="notification-item error">
      <div class="notification-content">
      <div class="notification-text">${msg}</div>
   
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
     </li>
  `,
  default: (msg) => `
    <li class="notification-item">
      <div class="notification-content">
     
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
     </li>
  `
};