import axios from "axios";

 



    export const PostComment = async (data) => {
        try {
            const response = await axios.post("http://localhost:3002/api/comment/post", data)

            if (response.status == 200) {
                console.log(`post Comment response status ===> ${response.status}`);
                return response.status;
            } else {
                console.log(`post Comment response status ===> ${response.status}`);

                return response.status
            }
        } catch (err) {
            console.error(err)
            console.log("POST COMMENT FAILED!!!===>", err);
        }
    }

    export const EditComment = async (data) => {
        try {
            const response = await axios.edit("http://localhost:3002/api/comment/edit", data)

            if (response.status == 200) {
                console.log(`edit Comment response status ===> ${response.status}`);
                return response.status;
            } else {
                console.log(`edit Comment response status ===> ${response.status}`);

                return response.status
            }
        } catch (err) {
            console.error(err)
            console.log("EDIT COMMENT FAILED!!!===>", err);
        }
    }

    export const DeleteComment = async (data) => {
        try {
            const response = await axios.delete("http://localhost:3002/api/comment/delete", data)

            if (response.status == 200) {
                console.log(`delete Comment response status ===> ${response.status}`);
                return response.status;
            } else {
                console.log(`delete Comment response status ===> ${response.status}`);

                return response.status
            }
        } catch (err) {
            console.error(err)
            console.log("DELETE COMMENT FAILED!!!===>", err);
        }
    }




