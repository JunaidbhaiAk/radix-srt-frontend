import axios from "axios";
console.log(import.meta.env);
const ApiClient = axios.create({ baseURL: `${import.meta.env.VITE_SERVER_URL}/api/` });

export const uploadFiles = async (data: any) => {
  try {
    const { subData, video } = data;
    const formData = new FormData();
    formData.append("subData", JSON.stringify(subData));

    formData.append("video", video);
    const res = await ApiClient.post("/", formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    if (res.status === 200) return res.data;
    return { msg: "Error" };
  } catch (error) {
    console.log(error);
  }
};

export const getFileStream = async (id: string, isSub: number) => {
  try {
    const res = await ApiClient.get(`/filestream/${id}?sub=${isSub}`, {
      responseType: "blob",
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFiles = async () => {
  try {
    const res = await ApiClient.get("/");
    if (res.status === 200) return res.data;
    return { msg: "Failed" };
  } catch (error) {
    console.log(error);
  }
};

export const getSubtitle = async (id: string) => {
  try {
    console.log(id,'dasd')
    const res = await ApiClient.get(`/filestreamsub/${id}`);
    if (res.status === 200) return res.data;
    return { msg: "Failed" };
  } catch (error) {
    console.log(error);
  }
};
