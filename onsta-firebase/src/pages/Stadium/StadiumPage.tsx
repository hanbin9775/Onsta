import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PageTemplate from 'components/PageTemplate';
import { typography } from 'styles/theme';
import Like from './Like';

const demoUrl =
  'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.xhP3ExfcX8ON.m3u8';
const playBackUrl =
  'https://bb62a2c22cf4.us-west-2.playback.live-video.net/api/video/v1/us-west-2.675671827506.channel.MJxYZs3yF17V.m3u8';

const StadiumPage = () => {
  const maxMetaData = 10;

  useEffect(() => {
    const metData = [];

    const mediaPlayerScriptLoaded = () => {
      const MediaPlayerPackage = (window as any).IVSPlayer;

      if (!MediaPlayerPackage.isPlayerSupported) {
        alert('The current browser does not support the Amazon IVS player.');
      }
      const { PlayerState, PlayerEventType } = MediaPlayerPackage;
      const player = MediaPlayerPackage.create();
      player.attachHTMLVideoElement(document.getElementById('video-player'));
      player.setAutoplay(true);
      player.load(demoUrl);
      player.setVolume(0.5);
    };

    const mediaPlayerScript = document.createElement('script');
    mediaPlayerScript.src =
      'https://player.live-video.net/1.5.1/amazon-ivs-player.min.js';
    mediaPlayerScript.async = true;
    mediaPlayerScript.onload = () => mediaPlayerScriptLoaded();
    document.body.appendChild(mediaPlayerScript);
  }, []);

  return (
    <PageTemplate>
      <BodySection>
        <StadiumSection>
          <VideoContentWrapper>
            <VideoContent id="video-player" playsInline muted />
          </VideoContentWrapper>
          <LikeWrapper>
            <Like />
          </LikeWrapper>

          <TitleWrapper>
            <Title>Sample Text Sample Text</Title>
          </TitleWrapper>
          <PreviewSection>
            <PreviewVideo />
            <PreviewVideo />
            <PreviewVideo />
            <PreviewVideo />
            <PreviewVideo />
            <PreviewVideo />
            <PreviewVideo />
            <PreviewVideo />
          </PreviewSection>
        </StadiumSection>
        <ChattingSection>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
          <ChattingBox>121212</ChattingBox>
        </ChattingSection>
      </BodySection>
    </PageTemplate>
  );
};

const BodySection = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// StadiumSection
const StadiumSection = styled.section`
  width: calc(100vw - 30rem);
`;

const VideoContentWrapper = styled.div`
  padding-left: 4rem;
  /* background-color: ${({ theme }) => theme.color.grayScale[250]}; */
  background-color: black;
  height: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContent = styled.video`
  height: 100%;
  width: 100%;
`;

const LikeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -4rem;
  right: 1rem;
`;

const TitleWrapper = styled.div`
  padding-left: 4rem;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.bodyRgBold}
  margin-top: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.blue};
  color: #fff;
  padding: 1rem 0 1rem 1rem;
`;

const PreviewSection = styled.div`
  padding-left: 4rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 2rem;
`;

const PreviewVideo = styled.div`
  width: 20rem;
  height: 12rem;
  flex: 0 0 auto;
  border: solid 0.1rem black;
`;

// ChattingSection
const ChattingSection = styled.section`
  min-width: 30rem;
  padding: 2rem;
  border-left: 0.1rem solid ${({ theme }) => theme.color.grayScale[500]};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-y: auto;
  gap: 2rem;
  height: 100vh;
`;

const ChattingBox = styled.div`
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.grayScale[500]};
  padding: 0.5rem 1rem;
  ${({ theme }) => theme.typography.bodyRg}
  flex: 0 0 auto;
`;

export default StadiumPage;
