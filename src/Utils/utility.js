

const getProjectCategoryIndex = (all_projects, category) =>{

    for (let i = 0; i< all_projects.length; i++){
        if (all_projects[i].name == category){
            return i;
        }
    }

    return 0;
}

export {getProjectCategoryIndex};