# react-shopping-cart

## 구조

1. Header
   - [x] Navigating
2. Main
   1. Cart Title
      - [x] 페이지 설명
      - [x] 총 상품 개수 출력
   2. Cart Item Container
      1. CartItemControls
         - [x] 전체 선택 기능
      2. CartItemList
         1. CartItem
            - [x] 아이템 수량 조절(-, +)
            - [x] 개수가 0이 되면 삭제 (TODO: 자동 처리되는지 확인)
            - [x] 해당 아이템 삭제 기능
            - [x] 해당 아이템 선택 기능
   3. Cart Results
      - [x] 배송비 관련 문구 출력
      - [x] 주문 금액 계산
      - [x] 배송비 출력
      - [x] 총 결제 금액 출력
3. Footer
   - [x] 아이템이 있는 경우에만 ‘주문 확인’ 버튼 활성화

## 기능

- [x] **`/cart-items`** API를 호출하여 장바구니 상품 데이터를 불러온다.
- [x] 불러온 데이터를 기반으로 Recoil을 사용하여 클라이언트 상태를 관리한다.
  - 개별 상품의 선택 여부, 결제 금액, 배송비 등의 상태를 Recoil로 관리한다.
- [x] 상품 선택에 따른 결제 금액, 배송비 등의 동적인 변경 사항을 처리한다.
  - 상품 선택/해제 시 결제 금액을 동적으로 변경한다.
  - 결제 금액이 10만원 이상일 경우 배송비는 무료이다.
- [x] 장바구니 상품의 수량 변경을 할 수 있다.
- [x] 장바구니에 담긴 상품을 제거할 수 있다.
- [x] 새로고침해도 선택한 상품 상태를 유지해서 보여준다.
  - 로컬 스토리지
    1. check 객체를 만든다. {id1:true, id2:false, ...}
    2. set
       1. cartState -> cartid -> localStorage에 추가 및 삭제.
       2. check 로컬스토리지 직접 접근해서 수정
       3. 아이템 삭제시 localStorage에서 삭제.
    3. Get (Client)
       1. default -> localStorage에 없으면 true 있으면 로컬스토리지 값

## 테스트

<총 상품 개수 출력>

- [ ] 담겨있는 상품의 갯수를 잘 출력하는가?
- [ ] 상품이 없으면 아예 출력하지 않는가?

<전체 선택 기능>

- [ ] 전체 선택 클릭시 모두 선택되는가?
- [ ] 전체 선택이 된 상태에서 클릭시 모두 해제되는가?

<아이템 수량 조절>

- [ ] 각 버튼을 눌렀을 때 개수가 잘 증감되는가?

<개수가 0이 되면 삭제>

- [ ] 개수가 1일 때 `-` 버튼을 누르면 해당 아이템이 삭제되는가?

<해당 아이템 삭제 기능>

- [ ] 삭제 버튼을 눌렀을 경우 해당 아이템이 장바구니에서 삭제 되는가?

<해당 아이템 선택 기능>

- [ ] 선택 버튼을 눌렀을 경우 해당 아이템이 선택되는가?

<주문 금액 계산>

- [ ] 선택한 아이템의 금액을 잘 더해서 출력하는가?

<배송비 출력>

- [ ] 계산된 금액을 토대로 배송비를 적절하게 출력하는가?

<쿠폰에 대한 테스트>

- [x] 모킹 테스트
- [ ] 쿠폰 활성화 여부 테스트(useCoupon)

  - 체크된 쿠폰이 2개일 경우 비활성화, 체크되어있는 쿠폰이라면 활성화
    - [x] 작성
    - [x] 통과
  - 최소주문금액 확인
    - [x] 작성
    - [x] 통과
  - buyXgetY 확인
    - [x] 작성
    - [x] 통과
  - 유효기간 확인
    - [x] 작성
    - [x] 통과
  - 사용시간 확인
    - [x] 작성
    - [x] 통과
  - 모두 통과
    - [x] 작성
    - [x] 통과
  - 배송비 쿠폰 사용 가능 여부
    - [x] 작성
    - [x] 통과

- 계산 로직에 대한 테스트
  - [ ] percentage \* fixed인 경우 정상 작동 여부
    - [x] 작성
    - [x] 통과
  - [x] BOGO 쿠폰 정상 작동 여부
    - 1. 수량이 2개 이상인 아이템에 적용 되는지 여부
    - 2. 가장 비싼 아이템에 적용되는지 여부
    - [x] 작성
    - [x] 통과
  - [ ] 배송비 쿠폰 정상 작동 여부
    - 1. 배송비가 안드는 경우 비적용
    - 2. 배송비가 드는 경우 적용
    - [ ] 작성
    - [ ] 통과
- [ ] 최종 계산에 대한 테스트
  - totalAmount + 배송비 - 할인금액
