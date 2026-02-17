export interface ServiceItem {
  id: string;
  title: string;
  category: 'Creative' | 'Production' | 'Marketing' | 'Strategy';
  description: string;
  price: string;
  priceValue: number;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface OrderFormData {
  name: string;
  businessType: string;
  serviceId: string;
  whatsapp: string;
}
