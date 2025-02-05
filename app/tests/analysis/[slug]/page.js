"use client";
import CustomChart from '@/components/CustomChart';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ProgressCircle } from '@/components/ProgressCircle';
import { testsData } from '@/util/placeholderData';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Analysis({params}) {
  const slug = params.slug;
  const test = testsData.find((test) => test.id === slug);
  const [user, setUser] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [detailedResults, setDetailedResults] = useState([]);
  const [maxQuestions, setMaxQuestions] = useState(0);
  const [leastScoredSubject, setLeastScoredSubject] = useState({});

  useEffect(() => {
    // Retrieve stored user answers
    const storedAnswers = JSON.parse(localStorage.getItem("selectedOptions")) || {};
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    setUser(storedUser)
    setUserAnswers(storedAnswers);
    console.log(storedAnswers)

    let overallScore = 0;
    let resultsBySubject = [];
    let maxQues = 0;

    // Iterate over subjects
    test?.tests.forEach((subject) => {
        let correctCount = 0;
        let subjectDetails = {
            subject: subject.subject,
            score: 0,
            totalQuestions: subject.questions.length,
            questions: [],
            totalMarks: subject.totalMarks,
        };

        // Update max questions for grid layout
        maxQues = Math.max(maxQues, subject.questions.length);

        // Iterate over questions in each subject
        subject.questions.forEach((question) => {
            const userAnswerIndex = storedAnswers[question.id]; // Get user answer index
            const isCorrect = userAnswerIndex === question.answer; // Compare with correct index
            
            if (isCorrect) correctCount++;
            
            subjectDetails.questions.push({
                question: question.question,
                userAnswer: userAnswerIndex || "Not Answered",
                correctAnswer: question.answer,
                isCorrect,
            });
        });

        subjectDetails.score = correctCount; // Update subject-wise score
        overallScore += correctCount;
        resultsBySubject.push(subjectDetails);
    });
    const subjectWithLeastScore = resultsBySubject.reduce((minSubject, currentSubject) => {
      return currentSubject.score < minSubject.score ? currentSubject : minSubject;
  }, resultsBySubject[0]);

    setTotalScore(overallScore);
    setDetailedResults(resultsBySubject);
    setMaxQuestions(maxQues);
    setLeastScoredSubject(subjectWithLeastScore);
}, [test]);
console.log(detailedResults)

  const subjectWithMostQuestions = detailedResults.reduce((maxSubject, currentSubject) => {
    return currentSubject.totalQuestions > maxSubject.totalQuestions ? currentSubject : maxSubject;
  }, detailedResults[0]);


  return (
    <div className='bg-[#F2EDED] w-full'>
      <Navbar />
      <div className='flex items-center justify-center flex-col space-y-5 w-full p-5'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center justify-center space-x-5'>
            <button className='bg-[#861721] text-white tracking-wide p-1 px-5 text-sm rounded-2xl'>Test Section</button>
            <button className='bg-[#861721] text-white tracking-wide p-1 px-5 text-sm rounded-2xl'>Subjects</button>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <Link href={`/tests/questionWiseAnalysis/${slug}`} className='bg-[#861721] text-white tracking-wide p-1 px-5 text-sm rounded-2xl'>View Question Wise Analysis</Link>
            <button className='bg-[#861721] text-white tracking-wide p-1 px-5 text-sm rounded-2xl'>Book a Counseler</button>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
        <div className="flex items-start justify-center flex-col p-3 space-y-3 text-black w-1/3">
          <span className='text-[#861721] text-sm font-semibold'>Student Performance Data</span>
          <div className='flex items-start justify-center w-full max-w-full overflow-x-scroll'>
            <div className={`flex flex-col items-start justify-center text-sm w-full text-center`}>
              <span className='border border-[#A4A4A4] p-1 rounded-tl-lg w-full text-[#861721]'>Subject</span>
              {detailedResults?.map((subject, index) => (
                <span key={index} className={`border border-[#A4A4A4] p-1 w-full ${index === detailedResults?.length - 1 && "rounded-bl-lg"}`}>{subject?.subject}</span>
              ))}
            </div>
            <div className={`grid grid-cols-1 text-sm items-center justify-center text-center w-full`}>
                <span className={`border border-[#A4A4A4] text-[#861721] p-1 text-sm w-full rounded-tr-lg`}>Total Marks</span>
              {detailedResults?.map((i, index) => (
                <div key={index} className={`grid grid-cols-1 text-center text-sm items-center justify-center w-full`}>
                  <span className='border border-[#A4A4A4] p-1 text-sm w-full'>{i?.score}</span>
                </div>
            ))}
            </div>
          </div>
          <CustomChart labels={detailedResults.map((i) => i.subject)} datasets={[
            {
              label: "Performance",
              data: detailedResults.map((i) => i.score),
              borderColor: "#FF7272",
              backgroundColor: "rgba(255, 255, 255, 0)",
              tension: 0.4,
              fill: "origin",
            }
          ]} yMax={5} stepSize={1} />
        </div>
        <div className='w-2/3 flex items-center justify-center flex-col space-y-3'>
            <div className='flex items-end justify-center w-full space-x-20'>
              <Image src={user?.photoURL ? user.photoURL : "/placeholderUser.png"} alt='user' width={150} height={150} className='bg-white p-5 rounded-xl shadow-md
               shadow-[#00000040]' />
               <div className='flex items-start justify-center flex-col space-y-2'>
                <span className='text-[#861721] font-semibold'>Avg Subject Score</span>
                <div className='flex items-center justify-center space-x-3'>
                  {detailedResults?.map((i, index) => (
                    <div key={index} className='flex items-center justify-center flex-col space-y-1'>
                      <ProgressCircle value={i?.score/i?.totalMarks * 100} />
                      <span className='text-[#861721] text-sm font-semibold'>{i.subject}</span>
                    </div>
                  ))}
                </div>
               </div>
            </div>
            <div className='flex items-center justify-center w-full'>
              <CustomChart labels={detailedResults.map((i) => i.subject)} datasets={[
            {
              label: "You",
              data: detailedResults?.map((i) => i?.score),
              borderColor: "#0A0AFE",
              backgroundColor: "rgba(255, 255, 255, 0)",
              tension: 0.4,
              fill: "origin",
            },
            {
              label: "Topper",
              data: detailedResults?.map((i) => i?.totalMarks),
              borderColor: "#00000",
              backgroundColor: "rgba(255, 255, 255, 0)",
              tension: 0.4,
              fill: "origin",
            },
            {
              label: "Topper",
              data: detailedResults?.map((i) => i?.totalMarks/2),
              borderColor: "#F5061C",
              backgroundColor: "rgba(255, 255, 255, 0)",
              tension: 0.4,
              fill: "origin",
            },
          ]} yMax={5} stepSize={1} />
          </div>
          <div className='flex w-full items-center justify-center space-x-5'>
            <div className='bg-[#FFFCFC] flex items-center justify-center p-7 px-10 rounded-xl text-[#861721] shadow-md shadow-[#00000040] text-xl font-semibold'>
              <span>Need to have more focus and practice in {leastScoredSubject?.subject}</span>
            </div>
            <div className='bg-[#FFFCFC] flex items-center justify-center p-3 px-10 rounded-xl shadow-md shadow-[#00000040]'>
              <Image src={"/callAgent.png"} alt='contact us' width={60} height={60} />
              <div className='flex items-center flex-col justify-center space-y-2'>
                <span className='text-xl font-bold text-[#861721]'>Contact us</span>
                <span className='text-sm text-black font-semibold'>Need any help 
                book a counselor</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="bg-[#FFFCFC] rounded-[30px] mx-20 flex items-center shadow-md shadow-[#00000040] border border-black w-[90%] justify-between my-10 p-10 px-20">
          <span className="text-3xl font-bold text-[#861721]">
            Wanna check more about the course?
          </span>
          <button className="bg-black rounded-2xl flex items-center justify-center space-x-5 p-5 px-10">
          <Image
            src={"/downloadIcon.png"}
            alt="download"
            width={20}
            height={20}
          />
          <span className="text-lg font-semibold">Vsit Video Library</span>
          </button>
        </div>
        <div className="flex items-center justify-center space-x-1 py-10 px-20 w-full">
        <span className="text-[#861721] text-xl font-semibold text-center w-[10%]">
          Our Teachers
        </span>
        <div className="bg-[#861721] h-0.5 rounded-3xl w-[90%]"></div>
      </div>
      <div className="flex items-center justify-between w-full px-20 pb-20">
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Analysis