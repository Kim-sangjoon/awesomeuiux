#!/bin/bash

# 종속성 설치
# npm install --legacy-peer-deps

# 프로젝트 빌드
# npm run build

# 프로젝트 배포
npm run deploy

# 빌드된 'build' 디렉토리를 gh-pages 브랜치로 푸쉬하기
# npx gh-pages -d build