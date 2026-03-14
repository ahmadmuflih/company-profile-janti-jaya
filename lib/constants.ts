// Contact Information
export const CONTACT = {
  whatsappNumber: '6287781811569',
  whatsappDefaultMessage: 'Halo Janti Jaya, saya ingin menanyakan tentang roll.',
  phone: '087781811569',
  email: '', // Tambahkan email jika ada
  
  // Address
  address: {
    street: 'K.H. Malik Dalam NO 19',
    city: 'Malang',
    province: 'Jawa Timur',
    postalCode: '65135',
    country: 'Indonesia',
  },
  
  // Operating Hours
  operatingHours: {
    weekdays: 'Senin - Minggu: 08.00 - 17.00 WIB',
    closedDay: 'Jumat: Tutup',
  },
  
  // Google Maps
  maps: {
    coordinates: {
      lat: -8.0080289,
      lng: 112.6439985,
    },
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3951.736833!2d112.6439985!3d-8.0080289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDAnMjguOSJTIDExMsKwMzgnMzguNCJF!5e0!3m2!1sen!2sid!4v1234567890',
    searchQuery: 'K.H.+Malik+Dalam+NO+19+Malang',
  },
};

// Helper function to get WhatsApp URL
export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || CONTACT.whatsappDefaultMessage;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

// Helper function to get full address
export const getFullAddress = () => {
  const { street, city, province, postalCode, country } = CONTACT.address;
  return `${street}, ${city}, ${province}, ${country}, ${postalCode}`;
};

// Company Information
export const COMPANY = {
  name: 'Janti Jaya',
  tagline: 'Presisi Tanpa Batas',
  description: 'Spesialis roll karet & teflon handmade dengan material import untuk mesin percetakan sejak 2001.',
  established: 2001,
  location: 'Malang, Indonesia',
};
