import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  coverImage?: string;
  author?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema<IBlog> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the blog'],
    },
    slug: {
      type: String,
      required: [true, 'Please provide a slug'],
      unique: true,
    },
    content: {
      type: String,
      required: [true, 'Please provide content for the blog'],
    },
    coverImage: {
      type: String,
    },
    author: {
      type: String,
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

// We need to check if the model already exists before defining it,
// otherwise Next.js will throw an error during hot reloading when models are overwritten
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
