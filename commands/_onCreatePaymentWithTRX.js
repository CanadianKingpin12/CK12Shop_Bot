/*CMD
  command: /onCreatePaymentWithTRX
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
CMD*/

if (!options) return

// You can store options if you want to inquire about the transaction status later

if (options.result == 100)
  Api.sendMessage({
    text: "📢 I set 100 TRX as my product price in this example (Check the code and find more)",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💵Pay (100 TRX)", web_app: { url: options.payLink } },
        ]
      ]
    }
  });
