const Skills=({skills}) => {
    return(
        <div className="skills">
            {
                skills.map((skill,index)=>(<span key={index} className="skill-badge">
                    {skill}
                </span>))
            }
        </div>
    )
}
export default Skills;