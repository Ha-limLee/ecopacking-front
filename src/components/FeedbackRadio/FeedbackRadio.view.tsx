import React from "react";

/**
 * groupName := 박스 또는 물품 id \
 * handleChange := 라디오 버튼을 선택할 때 작동하는 콜백
 */
export default function FeedbackRadioView({groupName, handleChange}: {groupName: string, handleChange: React.FormEventHandler}) {
    return (
        <div className="flex">
            <div className="flex items-center mr-4">
                <input id="inline-radio" onChange={handleChange} type="radio" value="-2" name={groupName} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="inline-radio" className="w-16 ml-2 text-sm font-medium text-gray-900 dark:text-black-300">너무 작다</label>
            </div>
            <div className="flex items-center mr-4">
                <input id="inline-2-radio" onChange={handleChange} type="radio" value="-1" name={groupName} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="inline-2-radio" className="w-8 ml-2 text-sm font-medium text-gray-900 dark:text-black-300">작다</label>
            </div>
            <div className="flex items-center mr-4">
                <input id="inline-3-radio" onChange={handleChange} defaultChecked={true} type="radio" value="0" name={groupName} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="inline-3-radio" className="w-8 ml-2 text-sm font-medium text-gray-900 dark:text-black-300">보통</label>
            </div>
            <div className="flex items-center mr-4">
                <input id="inline-4-radio" onChange={handleChange} type="radio" value="1" name={groupName} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="inline-4-radio" className="w-8 ml-2 text-sm font-medium text-gray-900 dark:text-black-300">크다</label>
            </div>
            <div className="flex items-center mr-4">
                <input id="inline-5-radio" onChange={handleChange} type="radio" value="2" name={groupName} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="inline-5-radio" className="w-16 ml-2 text-sm font-medium text-gray-900 dark:text-black-300">너무 크다</label>
            </div>
        </div>
    );
}