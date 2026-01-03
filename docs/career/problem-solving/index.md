---
title: L2. Problem Solving
sidebar_position: 3
---

# L2. 문제 해결 사례 (Problem Solving)

> **"Problem → Constraints → Choice → Result"**  
> 실제 프로젝트에서 마주친 기술적 난제와 해결 과정을 정리했습니다.  
> 단순한 기능 구현을 넘어, 리스크를 사전에 식별하고 시스템의 지속 가능성을 고민한 흔적들을 담았습니다.

## 📌 주요 사례 목록

### 1. 정합성 & 동시성 (Consistency & Concurrency)

- **[선착순 트래픽 정합성](/docs/career/problem-solving/concurrency-token)**
  - AI 키워드 퀴즈 선착순 정합성을 위한 패턴을 적용하여 DB 경합 해소 및 정합성 보장.
- **[분산 시스템 간 결제 정합성 확보](/docs/career/problem-solving/distributed-transaction)**
  - 블록체인-POS-API 간의 결제 동기화를 위해 Long Polling과 상태 머신, 비동기 대사(Reconciliation) 배치를 도입.

### 2. 성능 & UX (Performance & UX)

- **[유사도 계산의 일관성 확보](/docs/career/problem-solving/vector-similarity)**
  - 단순 코사인 유사도의 한계를 `Quantile` 재매핑으로 극복하여 사용자가 체감하는 정답률 피드백 개선.
- **[Redis ReadModel 캐싱](/docs/career/problem-solving/redis-readmodel)**
  - CQRS 패턴을 적용하여 복잡한 도메인 모델을 조회 최적화된 Redis ReadModel로 분리, 대규모 조회 성능 확보.
- **[Redis Bitmap 타게팅 엔진](/docs/career/problem-solving/redis-targeting)**
  - 수백만 패널 데이터를 비트 연산으로 처리하여 실시간 타게팅 모수 산출 및 역인덱싱 성능 극대화.
- **[SSE 기반 자산 수집 진척도 시각화](/docs/career/problem-solving/sse-loading)**
  - 비동기 레이어 간 상태 공유를 위해 **Progress Tracker**와 **Redis polling** 구조를 도입하여 사용자 체감 대기 시간 단축.

### 3. 아키텍처 & 유지보수 (Architecture & Maintainability)

- **[핵심 도메인을 보호하는 헥사고날 아키텍처](/docs/career/problem-solving/hexagonal-architecture)**
  - 외부 스키마(금융메타) 변동성으로부터 비즈니스 로직을 격리하여 코드 변경 범위를 어댑터 계층으로 최소화.
- **[결재 기반 상태 관리와 무중단 컨텐츠 배포](/docs/career/problem-solving/content-lifecycle)**
  - 상태 머신(State Machine)과 Copy-on-Write 버저닝을 통해 운영 Human Error를 원천 차단하고 무중단 컨텐츠 갱신 환경 구축.
- **[대규모 마이데이터를 위한 DynamoDB 키 설계](/docs/career/problem-solving/dynamodb-key-design)**
  - 서비스 조회와 데이터 분석이라는 상충하는 액세스 패턴을 고려하여 NoSQL의 물리적 한계를 극복한 키 설계 전략.

### 4. 운영 & 안정성 (Ops & Stability)

- **[구간별 관측 가능성(Observability) 확보](/docs/career/problem-solving/observability)**
  - 복잡한 단일 API 내부를 논리적 구간으로 분리하고 메서드별 메트릭을 수집하여 장애 파악 및 분석 시간 단축.
- **[Kafka Consumer 안정성 확보와 마이그레이션](/docs/career/problem-solving/kafka-consumer-stability)**
  - 데이터 스큐(Data Skew) 상황에서 발생하는 Rebalancing 문제를 Self-Chaining Chunking 전략으로 해결.
- **[리워드 예산 예측 및 시뮬레이션](/docs/career/problem-solving/reward-simulation)**
  - 몬테카를로 시뮬레이션 기법을 활용하여 복잡한 리워드 정책 배포 전 비용 리스크를 예측하는 도구 구축.
