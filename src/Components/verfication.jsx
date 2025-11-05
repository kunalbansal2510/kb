import React, { useState, useEffect, useRef } from 'react'
import { LockKeyhole } from 'lucide-react'

export default function Verification() {
  const [code, setCode] = useState(['', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(30)
  const [isResendEnabled, setIsResendEnabled] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
    if (timeLeft === 0) {
      setIsResendEnabled(true)
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  const handleChange = (index, value) => {
    if (value.length > 1) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value !== '' && index < 3) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handleResend = () => {
    setTimeLeft(30)
    setIsResendEnabled(false)
    setCode(['', '', '', ''])
    inputRefs.current[0].focus()
    // Add your resend logic here
    console.log('Resending verification code...')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const verificationCode = code.join('')
    console.log('Verification code:', verificationCode)
    // Add your verification logic here
  }

  return (
    <div className='flex h-screen w-screen bg-gradient-to-b from-red-300 to-red-600'>
      <div className='flex flex-col items-center justify-center m-auto bg-white h-96 w-80 rounded-lg shadow-lg p-6'>
        <LockKeyhole className='w-12 h-12 text-red-500 mb-4' />
        <h1 className='text-xl font-bold text-gray-800 mb-2'>
          Email Verification
        </h1>
        <div className='text-sm text-gray-600 text-center mb-6'>
          Please enter the 4-digit code sent to your email
        </div>

        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex justify-center gap-3 mb-6'>
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type='text'
                inputMode='numeric'
                pattern='[0-9]*'
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className='w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all'
              />
            ))}
          </div>
            
          <button
            type='submit'
            className='w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium transition-colors mb-4'
          >
            Verify Account
          </button>
        </form>

        <div className='text-center text-sm text-gray-600'>
          <p className='mb-2'>
            {isResendEnabled ? (
              "Didn't receive the code? "
            ) : (
              <>Resend code in <span className='font-semibold'>{timeLeft}s</span></>
            )}
          </p>
          <button
            onClick={handleResend}
            disabled={!isResendEnabled}
            className={`font-medium ${
              isResendEnabled
                ? 'text-red-500 hover:text-red-600 cursor-pointer'
                : 'text-gray-400 cursor-not-allowed'
            } transition-colors`}
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
  )
}