interface IRepair {
    id?: string;
    repairDate: Date;
    technicianName: string;
    daytimeHours: number;
    overTimeHours: number;
    driveTrip: number;
}
export default IRepair;