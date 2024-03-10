import {
    BrowserRouter as Router,
    useRoutes,
} from 'react-router-dom';
import Home from '../pages/Home';
// import Step4 from '../component/Step4';
// import Step1 from '../component/Step1';
// import Step2 from '../component/Step2';
// import Step3 from '../component/Step3';

const RoutesUser = () => {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        // { path: "/step1", element: <Step1/> },
        // { path: "/step2", element: <Step2 /> },
        // { path: "/step3", element: <Step3 /> },
        // { path: "/step4", element: <Step4 /> },
        // {
        //     path: "/posts",
        //     element: <Posts />,
        //     children: [
        //         { index: true, element: <PostLists /> },
        //         { path: ":slug", element: <Post /> }
        //     ],
        // },
    ]);
    return element;
}
export default RoutesUser;