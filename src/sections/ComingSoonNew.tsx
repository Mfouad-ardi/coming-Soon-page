import BackgroundElements from "../components/BackgroundElements";
import ComingSoonCard from "../components/ComingSoonCard";
import CursorFollower from "../components/CursorFollower";

const ComingSoonNewSection = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center p-4 relative overflow-hidden">
            <CursorFollower />
            <BackgroundElements />
            <ComingSoonCard />
        </div>
    );
};

export default ComingSoonNewSection;