import React from 'react';
import UpdateProject from '@/components/admin/project/updateProject';
import { getDocuments,getDocument } from '@/functions/firebase/getData';
const EditProject = ({project}) => {
    return (
        <div>
            <UpdateProject
            project={project}
            />
        </div>
    );
}


export default EditProject;



// serverside to fetch single catgory in serverside from firestore




EditProject.getInitialProps = async (context) => {
 
    // context.query.id ==> admin/category/edit/${context.query.id} in browser
        const project = await getDocument("projects", context.query.id);

     
       
        console.log('single category --<>' , project)
    
    
     
        return {
            project: project,
        };
      };