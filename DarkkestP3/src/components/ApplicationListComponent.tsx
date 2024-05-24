interface Application{
    appId: number
    userId: number
    oppId: number
    appStatus: number
    history: string
    notifications: string
}
interface propsInterface{
    data: Application;
}
export function ApplicationListComponent(props: propsInterface){
    console.log(props.data)
    let status;
    if (props.data.appStatus === 0) {
        status =
            <h2 className="text-xl font-semibold mb-2">
                Application Status: Pending
            </h2>;
    } else if (props.data.appStatus === 1) {
        status = 
        <h2 className="text-xl font-semibold mb-2">
            Application Status: Approved
        </h2>;
    } else if (props.data.appStatus === 2) {
        status = 
                <h2 className="text-xl font-semibold mb-2">
                    Application Status: Rejected
                </h2>;
    } else {
        status = 
                <h2 className="text-xl font-semibold mb-2">
                    Application Status: Unknown
                </h2>;
    }
    return (
        <div className="space-y-4">
            <div className="mt-8 text-left px-8 border rounded p-4 shadow-sm">
                {status}
                <p className="text-gray-700">
                    History: {props.data.history}
                </p>
                <p className="text-gray-700">
                    Notifications: {props.data.notifications}
                </p>
            </div>
        </div>
    );
}
export default ApplicationListComponent;