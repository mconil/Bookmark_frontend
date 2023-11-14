import { redirect } from "react-router-dom"
//import { useRevalidator } from "react-router-dom"

const URL = "https://djangobookmark.onrender.com/bookmark"


//createAction 
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()
   
    // construct request body
    const newbookmark = {
        title: formData.get("title"),
        description: formData.get("description")
    }
   //const revalidator = useRevalidator()
   
    // send request to backend
    await fetch(URL + "/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newbookmark)
    })
    //await revalidator.revalidate();
    
    // redirect back to index page
    return redirect("/")
}

//updateAction => update a todo from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    
    const id = params.id

    // construct request body
    const updatedbookmark = {
        title: formData.get("title"),
        description: formData.get("description"),
        complete: formData.get("complete")
    }

    // send request to backend
    await fetch(URL + `/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedbookmark)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a todo from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
   
    const id = params.id

    // send request to backend
    await fetch(URL + `/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}

