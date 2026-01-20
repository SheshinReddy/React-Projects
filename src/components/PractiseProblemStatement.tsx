const PractiseProblemStatement = ({ problemStatement }: { problemStatement: string }) => {
    return (
        <div className="practise-problem-statement">
            <h1>Problem Statement</h1>
            <p>{problemStatement}</p>
        </div>
    )
}

export default PractiseProblemStatement;