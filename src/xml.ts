import type { Extendable } from "./_extendable";

/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 *
 * When using arrays, XML element names are _not_ inferred (for singular/plural
 * forms) and the `name` property _SHOULD_ be used to add that information. See
 * examples for expected behavior.
 *
 * @see https://spec.openapis.org/oas/latest.html#xml-object
 */
export interface XMLObject extends Extendable {
  /**
   * Replaces the name of the element/attribute used for the described schema
   * property. When defined within `items`, it will affect the name of the
   * individual XML elements within the list. When defined alongside `type`
   * being `array` (outside the `items`), it will affect the wrapping element
   * and only if `wrapped` is `true`. If `wrapped` is `false`, it will be
   * ignored.
   */
  name?: string;
  /**
   * The URI of the namespace definition. This _MUST_ be in the form of an
   * absolute URI.
   */
  namespace?: string;
  /**
   * The prefix to be used for the
   * [name](https://spec.openapis.org/oas/latest.html#xmlName).
   */
  prefix?: string;
  /**
   * Declares whether the property definition translates to an attribute instead
   * of an element. Default value is `false`.
   */
  attribute?: boolean;
  /**
   * _MAY_ be used only for an array definition. Signifies whether the array is
   * wrapped (for example, `<books><book/><book/></books>`) or unwrapped
   * (`<book/><book/>`). Default value is `false`. The definition takes effect
   * only when defined alongside `type` being `array` (outside the `items`).
   */
  wrapped?: boolean;
}
