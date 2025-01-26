"use client";
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { testsData } from '@/util/placeholderData';

function Page({ params }) {
    const slug = params.slug;
    const test = testsData.find((test) => test.id === slug);

    const [currentSection, setCurrentSection] = useState(test.tests[0].subject);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({}); // Keep track of selections

    const handleOptionChange = (questionId, selectedIndex) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: selectedIndex, // Update the selected option for the specific question
        }));
    };

    const handleNext = () => {
        const questions = test?.tests.find((i) => i.subject === currentSection)?.questions;
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (currentQuestion === questions.length - 1) {
            const nextSectionIndex = test?.tests.findIndex((i) => i.subject === currentSection) + 1;
            if (nextSectionIndex < test?.tests.length) {
                setCurrentSection(test?.tests[nextSectionIndex].subject);
                setCurrentQuestion(0);
            }
        }
    };

    return (
        <div className="bg-white flex items-center justify-center flex-col w-full">
            <Navbar />
            <div className="flex w-full flex-col items-center justify-center -space-y-14 pb-5">
                <div className="bg-[#861721] w-full flex items-center justify-center">
                    <div className="text-white text-center pb-16 flex items-center justify-between w-[80%] px-10 pt-10">
                        {test?.tests.map((i, index) => (
                            <button
                                key={index}
                                className={`text-white ${currentSection === i?.subject && 'underline'} text-xl font-semibold`}
                                onClick={() => {
                                    setCurrentSection(i?.subject);
                                    setCurrentQuestion(0);
                                }}>
                                {i?.subject}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg shadow-[#00000030] mb-10 flex flex-col py-10 items-center space-y-5 justify-start text-black w-[80%]">
                    <div className="bg-[#FFF5C1] p-3 rounded-md w-[80%] flex items-start justify-center flex-col space-y-2 border-2 border-[#861721]">
                        <span className="text-[#861721] text-lg font-bold">
                            Question {currentQuestion + 1}
                        </span>
                        <span className="font-semibold">
                            {test?.tests
                                .find((i) => i.subject === currentSection)
                                ?.questions[currentQuestion].question}
                        </span>
                        <span>Options:</span>
                    </div>
                    <div className="flex items-start justify-start w-[80%] flex-col space-y-5">
                        {test?.tests
                            .find((i) => i.subject === currentSection)
                            ?.questions[currentQuestion].options.map((option, index) => {
                                const questionId =
                                    test?.tests
                                        .find((i) => i.subject === currentSection)
                                        ?.questions[currentQuestion].id;
                                const isSelected = selectedOptions[questionId] === index;

                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-start space-x-3 border-2 px-5 py-2 rounded-lg hover:cursor-pointer border-[#331316]`}>
                                        <input
                                            type="radio"
                                            name={`option-${questionId}`}
                                            checked={isSelected}
                                            onChange={() => handleOptionChange(questionId, index)}
                                            className="w-5 h-5 appearance-none border-2 hover:cursor-pointer border-[#861822] checked:bg-[#861822] rounded-full"
                                        />
                                        <label className="hover:cursor-pointer">{option}</label>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="flex items-center justify-end w-[80%]">
                        <button
                            className="px-10 py-2 text-white bg-[#003F7D] font-semibold rounded-lg"
                            onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start space-x-5 w-[80%] pb-10">
                {test?.tests
                    .find((i) => i.subject === currentSection)
                    ?.questions.map((_, index) => (
                        <button
                            onClick={() => setCurrentQuestion(index)}
                            key={index}
                            className={`text-white ${
                                currentQuestion === index ? 'bg-[#003F7D]' : 'bg-[#861721]'
                            } p-2 rounded-full px-4`}>
                            {index + 1}
                        </button>
                    ))}
            </div>
            <Footer />
        </div>
    );
}

export default Page;
