# env2dotenv

This action write specified environment variables to a file in dotenv format.

With this action, you can safely output your secret or another values stored in
github repository without concern for escaping or quote value.

## Example

```yml
uses: ./
with:
  # comma separated environment variable keys to output
  # Required
  keys: 'SOME_ENV,FROM_SECRET'
  # dotenv file path
  # Default: .env
  output: /env/test.env
env:
  SOME_ENV: hoge
  FROM_SECRET: ${{ secrets.SOME_VALUE }}
```
