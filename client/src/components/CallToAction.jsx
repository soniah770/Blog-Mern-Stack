import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about React js?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                   Learn Modern Web Technologies
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211208213105/Top-7-Reasons-To-Learn-Web-Development.png" />
        </div>
    </div>
  )
}