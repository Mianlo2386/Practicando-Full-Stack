const Total = ({course}) => {
    return (
      <p>Number of Exercises  {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    )
  }
  export default Total