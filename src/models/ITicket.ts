import ICustomer from "./ICustomer";
import IEmployee from "./IEmployee";
import IProduct from "./IProduct";
import IRepair from "./IRepair";
import ISparepart from "./ISparepart";

interface ITicket {
    id?: string;
    ticketIndex?: number;
    registerDate: string;
    creator?: IEmployee;
    customer?: ICustomer;
    product?: IProduct;
    description: string;
    extraItems?: string;    
    assignee?: IEmployee;
    customerContacted: boolean;
    readyDate?: string | null;
    repairs?: IRepair[];
    spareparts?: ISparepart[];
}
export default ITicket;