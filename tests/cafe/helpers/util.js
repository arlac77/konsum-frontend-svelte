import { Selector } from "testcafe";

export const base = "http://localhost:5000/services/konsum";

export async function login(t) {
  if (await Selector("#password").exists) {
    await t
      .typeText("#username", "user1", { replace: true })
      .typeText("#password", "secret", { replace: true })
      .click("#submit");
  }
}

export async function clickLink(t, href) {
  const a = Selector("a").withAttribute("href", href);
  await t.click(a);
}
