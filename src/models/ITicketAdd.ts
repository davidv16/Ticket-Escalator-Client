interface ITicketAdd {
    registerDate: string;
    creatorId: string;
    customerId: string;
    productId: string;
    description: string;
    extraItems: string;
    assigneeId: string | null;
    customerContacted: boolean;
    readyDate: string | null;
}
export default ITicketAdd;