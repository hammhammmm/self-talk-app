export interface Question {
  id: number;
  title: string;
  category: string;
}

export enum Category {
  SELF_AWARENESS = "self-awareness",
  SELF_ACCEPTANACE = "self-acceptance",
  SELF_CARE = "self-care",
  SELF_LOVE = "self-love",
  PURPOSE_AND_MEANING = "purpose-and-meaning",
}

export const questions: Question[] = [
  {
    id: 0,
    title:
      "วันไหนที่เรายิ้มกว้างสุดๆ และอะไรที่ทำให้หัวใจเราเต้นแรงได้แบบนั้น?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 1,
    title:
      "มีวันไหนที่เราพลาดจนรู้สึกแย่บ้าง แต่สุดท้ายแล้วกลายเป็นบทเรียนดีๆ กลับมาไหม?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 2,
    title:
      "มีวันไหนที่เราพลาดจนรู้สึกแย่บ้าง แต่สุดท้ายแล้วกลายเป็นบทเรียนดีๆ กลับมาไหม?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 3,
    title: "ทุกวันนี้เราเอาเวลาไปใช้กับอะไร แล้วมันทำให้ชีวิตเราดีขึ้นรึเปล่า?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 4,
    title: "วันนี้ตัวเองเป็นอย่างไร ถ้ามองจากมุมคนอื่นเข้ามา?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 5,
    title: "มีอะไรเล็กๆ ที่ทำให้เราตื่นขึ้นมาแล้วยิ้มรับวันใหม่บ้าง?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 6,
    title: "อีก 5 ปี เราอยากเป็นตัวเองในเวอร์ชันที่ดีที่สุดแบบไหน?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 7,
    title:
      "ถ้ามีใครก็ไม่รู้ เล่าเรื่องของเราในอนาคต อยากให้เขาพูดถึงเรายังไงบ้าง?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 8,
    title: "ถ้าคำว่า ‘กลัว’ ไม่เคยมีอยู่บนโลกใบนี้ คุณจะลองทำอะไรเป็นอย่างแรก?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 9,
    title: "อะไรในหัวตอนนี้ที่เราอยากเริ่มทำเลยเพื่อตัวเราในอนาคต?",
    category: Category.SELF_AWARENESS,
  },
  {
    id: 10,
    title: "มีอะไรในตัวเองที่ทำให้รู้สึกว่า 'เฮ้ย เราก็ไม่ธรรมดา!' บ้างไหม?",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 11,
    title:
      "มีอะไรในตัวเองที่ยังรู้สึกขัดใจกับมันอยู่บ้าง? แล้วมันเกิดจากอะไรนะ?",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 12,
    title:
      "พร้อมปล่อยวางเรื่องในอดีตแล้วหรือยังนะ? หรือยังมีอะไรที่ยังคาใจอยู่?",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 13,
    title:
      "เคยพยายามเปลี่ยนตัวเองเพื่อให้ใครสักคนไหม? แล้วตอนนั้นเรารู้สึกแฮปปี้จริงๆเหรอ?",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 14,
    title:
      "ถ้าเพื่อนกำลังดาวน์สุดๆ เราจะพูดอะไรปลอบเขา? แล้วลองพูดแบบนั้นกับตัวเองดูบ้างรึยัง",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 15,
    title:
      "ความคาดหวังที่ตั้งใจไว้ในตอนนี้ ถามจริงๆ มันแฟร์กับตัวเองแล้วรึยังนะ?",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 16,
    title: "เคยพูดกับตัวเองบ้างไหมว่า 'ขอบคุณนะที่สู้มาขนาดนี้' บ้างรึยัง?",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 17,
    title: "อะไรที่ทำให้เรารู้สึกว่าไม่กล้าเป็นตัวของตัวเอง?",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 18,
    title: "เวลาเห็นคนอื่นดูเพอร์เฟกต์ไปหมด เราแอบคิดอะไรอยู่ในใจบ้าง?",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 19,
    title:
      "เคยลองมองจุดอ่อนของตัวเองแบบจริงจังไหม? บางทีมันอาจมีข้อดีที่เราไม่เคยสังเกตก็ได้นะ",
    category: Category.SELF_ACCEPTANACE,
  },
  {
    id: 20,
    title: "ทุกวันนี้เรานอนพอไหม? หรือยังฝืนตัวเองอยู่?",
    category: Category.SELF_CARE,
  },
  {
    id: 21,
    title:
      "ช่วงนี้เรากินอะไรที่ดีต่อร่างกายบ้างไหม? หรือแค่กินตามใจปากอย่างเดียวนะ?",
    category: Category.SELF_CARE,
  },
  {
    id: 22,
    title: "วันนี้เราออกกำลังกายบ้างยัง?",
    category: Category.SELF_CARE,
  },
  {
    id: 23,
    title: "เวลาเราเครียด มีอะไรที่ช่วยให้เราผ่อนคลายได้แบบจริงๆ บ้างนะ?",
    category: Category.SELF_CARE,
  },
  {
    id: 24,
    title:
      "ช่วงนี้เราได้มีเวลาสงบๆ ให้ตัวเองนั่งนิ่งๆ คิดอะไรชิลๆ บ้างรึเปล่า?",
    category: Category.SELF_CARE,
  },
  {
    id: 25,
    title: "สิ่งที่เราทำทุกวันมันช่วยเติมพลัง หรือดูดพลังเราออกไปมากกว่ากันนะ?",
    category: Category.SELF_CARE,
  },
  {
    id: 26,
    title: "วันนี้มีอะไรที่ทำให้ตัวเองยิ้มออกหรือแฮปปี้บ้างรึยัง?",
    category: Category.SELF_CARE,
  },
  {
    id: 27,
    title: "เหนื่อยขนาดนี้ ได้หยุดพักให้ตัวเองบ้างหรือยัง?",
    category: Category.SELF_CARE,
  },
  {
    id: 28,
    title: "เวลาเรารู้สึกแย่ เราปลอบใจตัวเองว่ายังไงบ้าง?",
    category: Category.SELF_CARE,
  },
  {
    id: 29,
    title: "วันนี้มีอะไรเล็กๆ น้อยๆ ที่ทำให้เรารู้สึกดีขึ้นได้บ้างไหมนะ?",
    category: Category.SELF_CARE,
  },
  {
    id: 30,
    title: "วันนี้เราได้บอกตัวเองรึยังว่าสิ่งไหนที่เราทำได้ดี แล้วรู้สึกภูมิใจจริงๆ?",
    category: Category.SELF_LOVE,
  },
  {
    id: 31,
    title: "ตอนนี้มีอะไรในตัวเองที่เราชอบมากที่สุด? เคยลองถามตัวเองดูบ้างรึยัง?",
    category: Category.SELF_LOVE,
  },
  {
    id: 32,
    title: "เราเคยขอบคุณตัวเองสำหรับเรื่องเล็กๆ น้อยๆ ที่ทำสำเร็จบ้างไหม?",
    category: Category.SELF_LOVE,
  },
  {
    id: 33,
    title: "เวลาเราพลาดอะไรไป เราปลอบตัวเองด้วยความเข้าใจ หรือด่าตัวเองซ้ำเข้าไปอีกนะ?",
    category: Category.SELF_LOVE,
  },
  {
    id: 34,
    title: "เราได้ตั้งขอบเขตให้ตัวเอง เพื่อเพิ่มความสุขในชีวิตบ้างรึยัง?",
    category: Category.SELF_LOVE,
  },
  {
    id: 35,
    title:
      "มีอะไรในชีวิตที่ทำให้เรารู้สึกมีคุณค่าจริงๆ? แล้วเราได้ให้เวลากับมันมากพอรึยัง?",
    category: Category.SELF_LOVE,
  },
  {
    id: 36,
    title:
      "เรายอมรับตัวเองในแบบที่เราเป็นจริงๆ หรือเรากำลังเปลี่ยนตัวเองเพื่อให้ใครพอใจรึเปล่า?",
    category: Category.SELF_LOVE,
  },
  {
    id: 37,
    title: "เวลาที่เรารู้สึกแย่ เราเคยปลอบตัวเองด้วยความอ่อนโยน เหมือนที่เราปลอบใจเพื่อนบ้างไหม?",
    category: Category.SELF_LOVE,
  },
  {
    id: 38,
    title: "มีอะไรที่เราทำแล้วรู้สึกว่าใจฟู มีความสุขจริงๆ บ้างไหม?",
    category: Category.SELF_LOVE,
  },
  {
    id: 39,
    title: "ถ้าเรารักตัวเองมากกว่านี้ ชีวิตเราจะแฮปปี้ขนาดไหนกันนะ?",
    category: Category.SELF_LOVE,
  },
  {
    "id": 40,
    "title": "อะไรที่เราชอบทำสุดๆ แล้วทุกครั้งที่ทำรู้สึกใจฟู?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 41,
    "title": "อะไรในชีวิตที่ทำให้เรารู้สึกว่า 'นี่แหละ เรามีตัวตนและมีความหมายจริงๆ'?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 42,
    "title": "ถ้าไม่มีอะไรขวางทางเราเลย เราอยากใช้ชีวิตในแบบที่ฝันไว้ยังไง?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 43,
    "title": "เคยมีฟีลแบบ 'เราเกิดมาเพื่อสิ่งนี้' ไหม? แล้วสิ่งนั้นมันคืออะไร?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 44,
    "title": "ถ้ามีคนในอนาคตต้องพูดถึงเรา อยากให้เขาพูดถึงเราในแบบไหน?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 45,
    "title": "ความสำเร็จที่แท้จริงสำหรับเรามันควรจะเป็นยังไง?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 46,
    "title": "เคยทำอะไรที่ช่วยคนอื่นหรือสร้างประโยชน์ให้สังคมบ้างไหม?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 47,
    "title": "อะไรในชีวิตที่ทำให้เรารู้สึกอิ่มเอมใจและแฮปปี้สุดๆ?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 48,
    "title": "เป้าหมายที่ตั้งไว้ตอนนี้ มันตรงกับสิ่งที่เราให้ความสำคัญจริงๆ รึเปล่า?",
    "category": Category.PURPOSE_AND_MEANING
  },
  {
    "id": 49,
    "title": "ถ้าสามารถเริ่มต้นชีวิตใหม่จากศูนย์ได้ อยากให้มันออกมาเป็นแบบไหน?",
    "category": Category.PURPOSE_AND_MEANING
  }
];
