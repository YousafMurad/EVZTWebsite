import mongoose from 'mongoose';

interface IContact extends mongoose.Document {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
  submittedAt: Date;
  status: 'new' | 'in-progress' | 'completed';
}

const ContactSchema = new mongoose.Schema<IContact>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxLength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  company: {
    type: String,
    trim: true,
    maxLength: [100, 'Company name cannot exceed 100 characters']
  },
  phone: {
    type: String,
    trim: true,
    maxLength: [20, 'Phone number cannot exceed 20 characters']
  },
  service: {
    type: String,
    required: [true, 'Service is required'],
    enum: [
      'Web Development',
      'Mobile App Development',
      'E-commerce Solutions',
      'SaaS Development',
      'UI/UX Design',
      'Digital Marketing',
      'QA & Testing',
      'Consultation',
      'Other'
    ]
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxLength: [1000, 'Message cannot exceed 1000 characters']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'completed'],
    default: 'new'
  }
}, {
  timestamps: true
});

// Create indexes
ContactSchema.index({ email: 1 });
ContactSchema.index({ submittedAt: -1 });
ContactSchema.index({ status: 1 });

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
