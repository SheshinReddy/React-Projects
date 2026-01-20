import PractiseProblemStatement from "@/components/PractiseProblemStatement";
import { useState } from "react";

const ToggleGrid = () => {
    const [numberOfBlocks, setNumberOfBlocks] = useState(10);
    const [numberOfRows, setNumberOfRows] = useState(3);
    const [numberOfColumns, setNumberOfColumns] = useState(4);
    const [arrayOfBlocks, setArrayOfBlocks] = useState<number[]>(Array(numberOfBlocks).fill(0))

    // const handleNumberOfBlocksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNumberOfBlocks(Number(e.target.value));
    // }

    // const handleNumberOfRowsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNumberOfRows(Number(e.target.value));
    // }

    const handleClick = (cellNumber: number) => {
        setArrayOfBlocks((prev) => {
            const copy = [...prev];
            if (copy[cellNumber] == 0) { copy[cellNumber] = 1 }
            else { copy[cellNumber] = 0 }
            return copy;
        })
        console.log(arrayOfBlocks)
    }

    return (
        <div className="w-[100%] h-[100%] bg-yellow-200 flex flex-row justify-center items-center">
            <div className="page-container">
                <PractiseProblemStatement problemStatement="Toggle Grid" />
                {/* <div className="inputs-container">
                <p>Enter the number of blocks</p>
                <input type="number" value={numberOfBlocks} onChange={handleNumberOfBlocksChange} />
                <p>Number of blocks: {numberOfBlocks}</p>
                <p>Number of rows: {numberOfRows}</p>
                <input type='number' value={numberOfRows} onChange={handleNumberOfRowsChange} />
            </div> */}
                <div className="overall-box-container">
                    {Array.from({ length: numberOfRows }).map((_, i) => {
                        const n = Math.floor(numberOfBlocks / (numberOfColumns * (i + 1)));
                        let k;
                        if (n > 0) k = numberOfColumns;
                        else k = numberOfBlocks % numberOfColumns;
                        return (
                            <Row key={i} numberOfCells={k} row={i} totalNumberOfCols={numberOfColumns} handleClick={handleClick} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const SmallestBox = ({ row, col, numberOfCols, handleClick }: { row: number, col: number, numberOfCols: number, handleClick: (cellNumber: number) => void }) => {
    return (
        <div
            className="w-8 h-8 bg-red-500 border border-solid border-black flex flex-row justify-center items-center"
            onClick={() => handleClick(row * numberOfCols + col)}
        >{row * numberOfCols + col}</div>
    )
}

const Row = ({ numberOfCells, row, totalNumberOfCols, handleClick }: { numberOfCells: number, row: number, totalNumberOfCols: number, handleClick: (cellNumber: number) => void }) => {
    return (
        <div className="row-container flex flex-row gap-2 p-2">
            {Array.from({ length: numberOfCells }).map((_, i) => {
                return (
                    <SmallestBox key={i} row={row} col={i} numberOfCols={totalNumberOfCols} handleClick={handleClick} />
                )
            })}
        </div>
    )
}

export default ToggleGrid;