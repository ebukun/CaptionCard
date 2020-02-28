import React from "react";
import styled from "styled-components";

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 55px;

  &::before {
    content: "\00a0";
  }
`;

const SkeletonLine = () => <SSkeletonLine />;

export default SkeletonLine;
