import React from "react";
import NewPage from "../NewPage";

export default function page() {
  return (
    <NewPage>
      <section className="w-full flex flex-col">
        <p>
          Як працює блокчейн: від структури блоків до алгоритмів консенсусу
          Технічна суть блокчейн-технологій полягає у створенні розподіленого
          реєстру, де кожен блок містить набір транзакцій, що з’єднані у
          хронологічному порядку. Ця система гарантує незмінність даних завдяки
          застосуванню криптографії, що унеможливлює їх фальсифікацію або зміну.
          Кожен вузол мережі має копію реєстру, що робить систему
          децентралізованою та стійкою до атак. Для підтвердження транзакцій
          використовуються різні алгоритми консенсусу. Найвідомішими є:
        </p>
        <ul className="flex flex-col list-disc pl-5 py-5 gap-4">
          <li>
            Proof of Work (PoW): Алгоритм, що вимагає від учасників мережі
            виконання складних обчислювальних задач. Він забезпечує високу
            безпеку, проте потребує значних ресурсів.
          </li>
          <li>
            Proof of Stake (PoS): Метод, при якому підтвердження транзакцій
            здійснюється за рахунок володіння певною кількістю цифрових активів,
            що знижує енергоспоживання.
          </li>
        </ul>
        <p>
          Ключовим документом, який ознайомлює з основами технології, є Bitcoin
          whitepaper, опублікований у 2008 році. Після нього з’явилися інші
          проєкти, наприклад, Ethereum, який впровадив концепцію
          смарт-контрактів – програмних скриптів, що автоматично виконують умови
          договору без посередників. Смарт-контракти відкрили нові можливості
          для автоматизації процесів у фінансовій, юридичній та інших сферах.
          Цей розділ містить детальні пояснення технологічних принципів
          блокчейн, ілюстрації робочих процесів, а також посилання на навчальні
          ресурси та офіційну технічну документацію, що допоможуть Вам глибше
          зрозуміти механізми функціонування цієї інноваційної технології.
        </p>
      </section>
    </NewPage>
  );
}
