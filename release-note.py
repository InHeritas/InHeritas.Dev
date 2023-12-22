import datetime
import re

def convert_date_kr_to_en(date_kr):
    # 한국어 날짜 형식에서 숫자만 추출 (예: "2023년12월15일" -> [2023, 12, 12])
    numbers = list(map(int, re.findall(r'\d+', date_kr)))

    # datetime 객체로 변환
    date_obj = datetime.datetime(numbers[0], numbers[1], numbers[2])

    # 원하는 영어 형식으로 포맷 ("December 12, 2023" 형식)
    return date_obj.strftime("%B %d, %Y")

def format_feature(feature_description, type):
    if type == "feature":
        class_name = "feature-block"
        label = "Feature"
    elif type == "update":
        class_name = "update-block"
        label = "Updated"
    else: # type == "fix"
        class_name = "fix-block"
        label = "Fixed"

    return f"        <tr className=\"{class_name}\" style={{{{ height: '40px' }}}}>\n"\
           f"            <td style={{{{ border: 'none' }}}}>`{label}`</td>\n"\
           f"            <td style={{{{ border: 'none' }}}}>{feature_description}</td>\n"\
           f"        </tr>"

# 날짜 입력 받기
user_input_date = input("날짜를 입력하세요 (예: 2023년12월15일): ")

# 날짜 변환
converted_date = convert_date_kr_to_en(user_input_date)

# 결과 HTML 문자열에 저장
html_result = f"**{converted_date}**\n\n<br/>\n<table style={{{{ borderCollapse: 'collapse', border: 'none' }}}}>\n    <tbody>\n"

def input_loop(prompt, type):
    global html_result
    while True:
        user_input = input(prompt)
        if user_input.lower() == "없음":
            break
        if user_input.lower() == "끝":
            if type == "fix":
                break
            html_result += "        <tr style={{ height: '20px' }}></tr>\n"
            break
        html_result += format_feature(user_input, type) + "\n"

# 새로운 기능 입력
input_loop("새로운 기능을 입력하세요: ", "feature")

# 추가 입력 확인 및 업데이트 내용 입력
if input("이어서 입력하시겠습니까? (예/아니오): ").lower() == "예":
    input_loop("업데이트 내용을 입력하세요: ", "update")

# 추가 입력 확인 및 수정 사항 입력
if input("이어서 입력하시겠습니까? (예/아니오): ").lower() == "예":
    input_loop("수정 사항을 입력하세요: ", "fix")

# HTML 테이블 닫기
html_result += "    </tbody>\n</table>"

# 최종 결과 출력
print(html_result)
