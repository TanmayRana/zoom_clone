"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallbyId } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { user, isLoaded } = useUser();

  const { call, isCallLoading } = useGetCallbyId(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className="h-full w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
