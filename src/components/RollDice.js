import React, { useState } from 'react';
import Die from '../components/Die';
import "../styling/rolldice.css";

export default function RollDice() {
    const nums = ["one", "two", "three", "four", "five", "six"]

    const [die1, setDie1] = useState("one");
    const [die2, setDie2] = useState("one");

    function roll(){
        const newDie1 = nums[Math.floor(Math.random() * nums.length)];
        const newDie2 = nums[Math.floor(Math.random() * nums.length)];

        setDie1(newDie1);
        setDie2(newDie2);
    }

    
  return (
    <div className='rolldice'>
        <div className='dice-container'>
            <Die face={die1} />
            <Die face={die2} />
        </div>
        <button onClick={roll}>Roll Dice</button>
    </div>
  )
}
