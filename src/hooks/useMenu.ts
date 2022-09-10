import { useQuery } from "react-query";
import axios from "axios";
import { API } from "@env";
import { ProductResponse } from "src/components/organisms/ProductDetails/types";

const fetchMenu = async () => {
  const { data } = await axios.get(API);
  return data;
};

const useMenu = () => useQuery<ProductResponse>("menu", fetchMenu);
export default useMenu;
