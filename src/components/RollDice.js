import React, { useState } from 'react';
import Die from '../components/Die';
import "../styling/rolldice.css";

export default function RollDice() {
    const nums = ["one", "two", "three", "four", "five", "six"]

    const [die1, setDie1] = useState("one");
    const [die2, setDie2] = useState("one");
    const [rolling, setRolling] = useState(false);

    function roll(){
        const newDie1 = nums[Math.floor(Math.random() * nums.length)];
        const newDie2 = nums[Math.floor(Math.random() * nums.length)];

        setDie1(newDie1);
        setDie2(newDie2);
        setRolling(true);

        setTimeout(() => {
            setRolling(false)
        }, 1000)
    }

    
  return (
    <div className='rolldice'>
        <div className='dice-container'>
            <Die face={die1} roll={rolling} />
            <Die face={die2} roll={rolling} />
        </div>
        <button onClick={roll} disabled={rolling}>{rolling ? "Rolling..." : "Roll Dice!"}</button>
    </div>
  )
}
