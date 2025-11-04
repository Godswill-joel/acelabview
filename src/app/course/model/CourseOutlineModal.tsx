/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "../../components/Button";


interface CourseModalProps {
    course: {
        title: string;
        outline: string[];
        months: number;
        price: number;
        oldPrice: number;
    };
    isOpen: boolean;
    onClose: () => void;
    onEnroll: () => void;
}

export default function CourseModal({ course, isOpen, onClose, onEnroll }: CourseModalProps) {
    if (!isOpen) return null;

    const discount = Math.round(((course.oldPrice - course.price) / course.oldPrice) * 100);

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-br from-[#2661E9] to-[#1a4bb8] text-white p-6 sm:p-8">
                    <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">{course.title}</h2>
                            <div className="flex flex-wrap items-center gap-3 mt-3">
                                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                                    {course.months} Months
                                </span>
                                <span className="inline-flex items-center bg-green-400/90 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                                    Save {discount}%
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-280px)] sm:max-h-[calc(90vh-300px)]">
                    <div className="p-6 sm:p-8">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">Course Outline</h3>
                        <ul className="space-y-3">
                            {course.outline.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 group">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2661E9]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#2661E9]/20 transition-colors">
                                        <svg className="w-4 h-4 text-[#2661E9]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 leading-relaxed flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                        <div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                                    ₦{course.price.toLocaleString('en-NG')}
                                </span>
                                <span className="text-lg text-gray-400 line-through">
                                    ₦{course.oldPrice.toLocaleString('en-NG')}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            onClick={onEnroll}
                            className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white flex-1 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Enroll Now
                        </Button>
                        <Button
                            onClick={onClose}
                            className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 flex-1 sm:flex-none sm:px-8 py-3 sm:py-4 font-medium transition-all duration-200"
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}