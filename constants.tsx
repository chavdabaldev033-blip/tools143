
import { ImageFormat } from './types';
import type { Conversion } from './types';


export const CONVERSIONS: Conversion[] = [
  { from: ImageFormat.JPG, to: ImageFormat.PNG, path: 'jpg-to-png' },
  { from: ImageFormat.PNG, to: ImageFormat.JPG, path: 'png-to-jpg' },
  { from: ImageFormat.PNG, to: ImageFormat.WEBP, path: 'png-to-webp' },
  { from: ImageFormat.WEBP, to: ImageFormat.JPG, path: 'webp-to-jpg' },
];

export const FAQ_DATA = [
    {
        question: "Is this image converter free to use?",
        answer: "Yes, our image converter is completely free for personal and commercial use. There are no hidden charges or subscriptions."
    },
    {
        question: "Are my images uploaded to a server?",
        answer: "No, your privacy and security are our top priorities. All image conversions happen directly in your browser. Your files are never uploaded to any server, ensuring your data remains private."
    },
    {
        question: "What image formats are supported?",
        answer: "We currently support conversions between JPG, PNG, and WEBP formats. We are always working to add support for more formats in the future."
    },
    {
        question: "Is there a limit on file size or the number of conversions?",
        answer: "Since the conversion is done on your device, the main limitation is your browser's and computer's processing power. For most modern devices, converting reasonably sized images should be very fast. There is no limit on the number of conversions you can perform."
    },
    {
        question: "How does the conversion process work without uploading?",
        answer: "We use modern web technologies like the HTML5 Canvas API and JavaScript to process the images. When you select an image, it's loaded into your browser, drawn onto a hidden canvas, and then exported into your desired format. This allows for fast and secure conversions without data transfer."
    }
];
