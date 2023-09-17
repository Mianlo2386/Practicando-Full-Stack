const Content = ({course}) => {
    return (
         <p>
          {course.parts[0].name} {course.parts[0].exercises} <br/> <br/>
          {course.parts[1].name} {course.parts[1].exercises} <br/> <br/>
          {course.parts[2].name} {course.parts[2].exercises}
         </p>
    );
  }
  export default Content