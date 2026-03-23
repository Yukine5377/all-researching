import { useId, useState } from 'react'
import { AppHeader } from '../design-system/components/layout/AppHeader'
import { Button } from '../design-system/components/ui/Button'
import { TextField } from '../design-system/components/ui/TextField'

const ILLUSTRATION_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB2pfZqk8RLB5I1j-NYZnN7bSmGdjmSLi-Cr47jqv-MHrQyPe50L_C5EyvUxgzmuRw8PCTjaygSZAc09Om471dMXe0VayNwsWkRSJIiqpC6CDGHr4awHAQHnE6CmVpJQ8RP2cLNGR8CobD96gXuPn-E9rYefqpkk6oSkO7YLKbmdZbMEKk6mD3s3AvFTB_KnATcAsohcuQar531ubMY79tIpFUXI4-7tKm3iT1JPlD-T0P0qhRenu0n4nEi0BkF6nal651O_Iar7Oo'

const GOOGLE_ICON_SRC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCrXwm5FuXaHvz_JEls__GByibFWIhClj5SSESzNT3c-0qXrmkTFCK-8CJBt-H2vvU3gtzPnCjmj6IV8j5JgMgfzAffjOygLyPtievElr7DF1k4jvANgqgAwg5LgIt8vDOvTucQCR2ABYrfUXnM0MZPl7MldRM4EyJokV0dO0sbovpKUNEEYMpgoW7Hk9PQ97SUkAeM48wiBdM3dA_7Bupq-hyHGanJXvomHjuiuuyScab1fh6fnCsv4GiSxhIw0IdzeKidFY8Ssp4'

/**
 * Màn hình Stitch: projects/6347238164431372939/screens/af4bfd08e39d423197acb3bf9dee0f6e
 * Tiêu đề: Đăng nhập / Đăng ký
 */
export function WelcomeLoginPage() {
  const emailId = useId()
  const passwordId = useId()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <AppHeader brand="Commiz" onSkip={() => undefined} />
      <main className="pt-24 pb-12 px-6 max-w-md mx-auto">
        <div className="mb-10 relative flex justify-center">
          <div className="absolute -z-10 w-48 h-48 bg-primary-fixed rounded-full blur-3xl opacity-30" />
          <img
            alt="Minh họa chú chó Shiba Inu vui vẻ"
            className="w-48 h-48 object-contain drop-shadow-xl"
            src={ILLUSTRATION_SRC}
            width={192}
            height={192}
          />
        </div>

        <div className="mb-8 text-center">
          <h1 className="font-headline text-3xl font-semibold tracking-tight text-on-surface mb-2">
            Chào mừng bạn!
          </h1>
          <p className="text-on-surface-variant text-base">Đăng nhập để tiếp tục cùng Commiz</p>
        </div>

        <div className="space-y-4">
          <Button variant="social" type="button">
            <img alt="" className="w-5 h-5" src={GOOGLE_ICON_SRC} width={20} height={20} />
            <span className="font-medium text-on-surface">Tiếp tục với Google</span>
          </Button>

          <div className="flex items-center gap-4 py-4">
            <div className="h-px flex-1 bg-outline-variant/30" />
            <span className="text-xs font-medium font-label text-on-surface-variant">HOẶC</span>
            <div className="h-px flex-1 bg-outline-variant/30" />
          </div>

          <div className="space-y-4">
            <TextField
              id={emailId}
              label="Email"
              type="email"
              placeholder="email@vi-du.com"
              autoComplete="email"
            />
            <TextField
              id={passwordId}
              label="Mật khẩu"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              autoComplete="current-password"
              suffix={
                <button
                  type="button"
                  className="p-0 border-0 bg-transparent cursor-pointer text-on-surface-variant"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              }
            />
          </div>

          <div className="flex justify-end pt-1">
            <Button variant="ghost" type="button" className="p-0 h-auto">
              Quên mật khẩu?
            </Button>
          </div>

          <div className="pt-4 space-y-3">
            <Button variant="primaryGradient" type="button" className="w-full">
              Đăng nhập
            </Button>
            <Button variant="primarySoft" type="button" className="w-full">
              Đăng ký
            </Button>
          </div>
        </div>

        <p className="mt-10 text-center text-xs font-medium font-label text-on-surface-variant px-8 leading-relaxed">
          Bằng cách tiếp tục, bạn đồng ý với{' '}
          <a className="text-primary font-medium" href="#terms">
            Điều khoản dịch vụ
          </a>{' '}
          và{' '}
          <a className="text-primary font-medium" href="#privacy">
            Chính sách bảo mật
          </a>{' '}
          của chúng tôi.
        </p>
      </main>

      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-surface-container-low to-transparent -z-10 pointer-events-none" />
    </>
  )
}
